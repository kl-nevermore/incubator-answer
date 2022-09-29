import { memo } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import { Icon, FormatTime } from '@answer/components';

const ActionBar = ({
  nickName,
  username,
  createdAt,
  isVote,
  voteCount = 0,
  memberActions,
  onReply,
  onVote,
  onAction,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'comment' });

  return (
    <div className="d-flex justify-content-between fs-14">
      <div className="d-flex align-items-center">
        <Link to={`/users/${username}`}>{nickName}</Link>
        <span className="mx-1 text-secondary">•</span>
        <FormatTime time={createdAt} className="text-secondary me-3" />
        <Button
          variant="link"
          size="sm"
          className={`me-3 btn-no-border p-0 ${isVote ? '' : 'text-secondary'}`}
          onClick={onVote}>
          <Icon name="hand-thumbs-up-fill" />
          {voteCount > 0 && <span className="ms-2">{voteCount}</span>}
        </Button>
        <Button
          variant="link"
          size="sm"
          className="text-secondary m-0 p-0 btn-no-border"
          onClick={onReply}>
          {t('btn_reply')}
        </Button>
      </div>
      <div className="align-items-center control-area d-none">
        {memberActions.map((action, index) => {
          return (
            <Button
              key={action.name}
              variant="link"
              size="sm"
              className={classNames(
                'text-secondary btn-no-border m-0 p-0',
                index > 0 && 'ms-3',
              )}
              onClick={() => onAction(action)}>
              {action.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default memo(ActionBar);