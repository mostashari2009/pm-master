import drfProvider, {
  fetchJsonWithAuthJWTToken,
} from "ra-data-django-rest-framework";

const dataProvider = drfProvider(
  "http://185.231.115.209:8080",
  fetchJsonWithAuthJWTToken
);

const myDataProvider = {
  ...dataProvider,
  create: (resource, params) => {
    if (resource !== "PMWorks/Document" || !params.data.FileAddress) {
      // fallback to the default implementation
      return dataProvider.create(resource, params);
    }
    // The PMWorks/Document edition form uses a file upload widget for the FileAddress field.
    // Freshly dropped FileAddress are File objects Object.values(data)
    // and must be converted to base64 strings .entries(data)
    const newFileAddress = Object.values(params.data.FileAddress).filter(
      (p) => p.rawFile instanceof File
    );

    const formerFileAddress = Object.values(params.data.FileAddress).filter(
      (p) => !(p.rawFile instanceof File)
    );
    console.log("llll", newFileAddress);
    console.log("dd", formerFileAddress[1]);

    return Promise.all(formerFileAddress[1].map(convertFileToBase64))
      .then((base64FileAddress) =>
        base64FileAddress.map((FileAddress64) => ({
          src: FileAddress64,
          title: `${params.data.DocumentCode}`,
        }))
      )
      .then((transformedNewFileAddress) =>
        dataProvider.create(resource, {
          ...params,
          data: {
            ...params.data,
            FileAddress: [...transformedNewFileAddress, ...formerFileAddress],
          },
        })
      );
  },
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    console.log("fff", file.rawFile);
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export default myDataProvider;
