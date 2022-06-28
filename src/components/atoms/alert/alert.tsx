import classnames from 'classnames';
import type { ReactElement } from 'react';

import AlertIcon from '~components/atoms/alert-icon/alert-icon';

import './alert.scss';

interface AlertProps {
  className?: string;
  severity: string;
  title?: string;
  contents: string | ReactElement;
}

/**
 * Alert Component
 * @param className : [optional] add class
 * @param severity : [required] 타입 (error, warning, info, success)
 * @param title : [optional] 타이틀 제목
 * @param contents : [required] Description 문구
 */
const Alert = ({ className, severity, title, contents }: AlertProps) => {
  const themeArray = {
    bg: {
      error: 'bg-error',
      warning: 'bg-warning',
      info: 'bg-info',
      success: 'bg-success',
    },
  };
  const alertClassName = classnames(
    `alert__container alert__${severity}-text-color ${themeArray.bg[severity]}`,
    className,
  );

  return (
    <div className={alertClassName}>
      <div className="alert__icon">
        <AlertIcon severity={severity}></AlertIcon>
      </div>
      <div className="alert__text-wrap">
        {title && <div className="alert__text-wrap-title">{title}</div>}
        <div className="alert__text-wrap-contents">{contents}</div>
      </div>
    </div>
  );
};

Alert.displayName = 'Alert';

export default Alert;
