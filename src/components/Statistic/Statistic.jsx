import PropTypes from 'prop-types';
import s from './Statistic.module.css';
import getRandomHexColor from 'utils/randomColor';

const Statistic = ({ title, statistic }) => {
  return (
    <section className={s.statistic}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {statistic.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  statistic: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistic;
