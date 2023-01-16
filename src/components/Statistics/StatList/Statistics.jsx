import PropTypes from 'prop-types';
// import css from './Statistics.module.css';

export function CreateStatistics(props) {
  const { label, percentage } = props;
  console.log(props);
  return (
    <ul className="stat-list">
      <li className="item">
        <span className="label">.docx</span>
        <span className="percentage">4%</span>
      </li>
      <li className="item">
        <span className="label">.mp3</span>
        <span className="percentage">14%</span>
      </li>
      <li className="item">
        <span className="label">.pdf</span>
        <span className="percentage">41%</span>
      </li>
      <li className="item">
        <span className="label">.mp4</span>
        <span className="percentage">12%</span>
      </li>
    </ul>
  );
}

CreateStatistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};