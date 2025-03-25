import styles from './styles.module.scss';

function BoxIcon({ name, icon, href }) {
  const Icon = icon;

  const { boxIcon, iconDefault } = styles;

  return (
    <a href={href} className={boxIcon} name={name}>
      <Icon className={iconDefault} />
    </a>
  );
}

export default BoxIcon;
