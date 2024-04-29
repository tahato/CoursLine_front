import React from 'react';

const Dropzon = () => {
    const [file, setFile] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const photo = file.map((file) => (
    <img src={file.preview} alt={file.name} className="photoProfile" />
  ));
    return (
        <div>
            <div className="addphoto" {...getRootProps()}>
                <input {...getInputProps()} />

                {file.length !== 0 ? (
                  <div>{photo}</div>
                ) : (
                  <div className="p">
                    <p>
                      {" "}
                      click to <br />
                      add photo
                    </p>
                  </div>
                )}
              </div>
        </div>
    );
};

export default Dropzon;