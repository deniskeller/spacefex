import React from 'react';
import styles from './FileInput.module.scss';
import { useDropzone } from 'react-dropzone';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface FileInputProps {
  files: File[];
  isMultiple?: boolean;
  className?: string;
  error?: string | boolean;
  onChange(files: File[]): void;
}

const FileInput: React.FC<FileInputProps> = ({
  files,
  onChange,
  isMultiple = false,
  error,
  className = '',
}) => {
  function onDeleteFile(lastModified: number) {
    const newArr = files.filter((file) => file.lastModified !== lastModified);
    onChange(newArr);
  }

  const uploadDropFile = React.useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles);
    },
    [onChange]
  );

  function onDropFunc(files: File[]) {
    console.log('files: ', files);
    if (files.length > 1 && isMultiple === true) {
      uploadDropFile(files);
    } else {
      uploadDropFile([files[0]]);
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFunc,
  });

  //обрезание строки
  const computedName = (file: string) => {
    if (file.length > 15) {
      const fileName = file.split('.')[0];
      const fileType = file.split('.')[1];
      const newStr = fileName.substring(0, 15);
      return newStr + '...' + '.' + fileType;
    }
    return file;
  };

  return (
    <>
      <div className={`${styles.FileInput} ${className}`}>
        {files?.length > 0 ? (
          files.map((file, index) => {
            return (
              <div
                className={`${styles.FileInput_Upload} ${
                  files.length > 1 ? styles.mb20 : ''
                }`}
                key={file?.name}
              >
                <div className={styles.FileInput_Upload_Title}>
                  {computedName(file.name)}
                </div>

                <BaseIcon
                  viewBox="0 0 21 21"
                  icon={ALL_ICONS.FILE_UPLOAD_CLOSE}
                  className={styles.FileInput_Upload_Close}
                  onClick={() => onDeleteFile(file.lastModified)}
                />
              </div>
            );
          })
        ) : (
          <>
            <div
              className={`${styles.FileInput_Clear} ${
                isDragActive ? styles.Active : ''
              } ${error ? styles.Error : ''}`}
              {...getRootProps()}
            >
              <div className={styles.FileInput_Clear_Border}></div>

              <input {...getInputProps()} />

              <div className={styles.FileInput_Clear_Content}>
                <div className={styles.FileInput_Clear_Content_Header}>
                  <div className={styles.FileInput_Clear_Content_Header_Title}>
                    <span>Attach your resume</span>
                  </div>

                  <div
                    className={styles.FileInput_Clear_Content_Header_Subtitle}
                  >
                    Click or drag to upload (PDF, DOCX)
                  </div>
                </div>
                <BaseIcon
                  viewBox="0 0 27 30"
                  icon={ALL_ICONS.FILE_UPLOAD}
                  className={styles.FileInput_Clear_Content_Icon}
                />
              </div>
            </div>
            {error ? (
              <div className={styles.ErrorText}>
                <span>{error}</span>
              </div>
            ) : (
              ''
            )}
          </>
        )}
      </div>
    </>
  );
};

export default FileInput;
