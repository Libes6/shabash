import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';

import { useActions } from '@/hooks/useActions';
import { useEditorAll } from '@/hooks/useEditor';

import { FilesService } from '@/services/files/files.service';

export const useNewPostUploadButton = () => {
  const { coverImageUrl } = useEditorAll();
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState(coverImageUrl);
  const { setCoverImageUrl } = useActions();

  const setUrlFile = (url: string) => {
    setUrl(url);
    setCoverImageUrl({ url });
  };

  const { isLoading, error, data, refetch } = useQuery(
    ['uploadPostImage', file],
    () => FilesService.upload(file),
    {
      enabled: !!file,
      select: (data) => data.data,
      onSuccess: (data) => {
        setUrlFile(data.file.url);
      },
    },
  );
  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(e);
    }
  };

  const onClearUrl = () => {
    setUrl('');
  };

  return { url, error, handleFileChange, onClearUrl };
};
