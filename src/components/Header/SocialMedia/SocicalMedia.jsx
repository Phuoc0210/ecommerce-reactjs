import BoxIcon from '../BoxIcon/BoxIcon';
import styles from './styles.module.scss';
import { dataBoxIcon } from '../constants';

function SocialMedia() {
  const { socialMdeia } = styles;
  return (
    <div className={socialMdeia}>
      {dataBoxIcon.map((data, index) => {
        return (
          <BoxIcon
            key={index}
            name={data.name}
            icon={data.icon}
            href={data.href}
          ></BoxIcon>
        );
      })}
    </div>
  );
}

export default SocialMedia;
