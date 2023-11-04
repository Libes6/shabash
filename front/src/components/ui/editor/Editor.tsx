import React, { FC, memo } from 'react';

import { useEditor } from '@/components/ui/editor/hooks/useEditor';
import { IEditorProps } from '@/components/ui/editor/interface/IEditor';

const Editor: FC<IEditorProps> = ({
  data,
  onChange,
  holder,
}) => {
  const { holder: editorHolder } = useEditor({
    data,
    holder,
    onChange,
  });

  return (
    <div>
      <div id={holder} className=""></div>
    </div>
  );
};

export default memo(Editor);
