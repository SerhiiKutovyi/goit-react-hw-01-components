// import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Title } from './Title/Title';

export function CreateStatistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <div></div>
      {title && <Title title={title} />}

      <ul className={css.statList}>
        {stats.map(ele => {
          return (
            <li key={ele.id} className="item">
              <span className="label">{ele.label}</span>
              <span className="percentage">{ele.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// CreateStatistics.propTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };
