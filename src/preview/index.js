import { useLocation, useSearchParams } from 'react-router-dom';
import VishnuPreviey from './vishnudeviravi';
import BahulPreview from './bahul';
import HariPreview from './hari';
import BasicButton from '../components/button/BasicButton';

import './index.scss';

export const Preview = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = useLocation().search;
  const p = new URLSearchParams(search).get('p');

  const onPreviewChange = p => {
    setSearchParams({ p: p });
  };

  const renderPage = () => {
    if (p === 'v') return <VishnuPreviey />;
    else if (p === 'h') return <HariPreview />;
    else if (p === 'b') return <BahulPreview />;
    else return <VishnuPreviey />;
  };

  return (
    <div className="preview-main">
      <div className="preview-btn">
        <BasicButton onClick={() => onPreviewChange('v')}>
          Vishnudeviravi
        </BasicButton>
        <BasicButton onClick={() => onPreviewChange('b')}>Bahul</BasicButton>
        <BasicButton onClick={() => onPreviewChange('h')}>Hari</BasicButton>
      </div>
      {renderPage()}
    </div>
  );
};
