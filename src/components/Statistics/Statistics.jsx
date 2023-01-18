import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Title } from './Title/Title';

export function CreateStatistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <Title title={title} />}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
              className={css.item}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

CreateStatistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
