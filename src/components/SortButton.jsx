import Icon from './Icon';

const SortButton = ({ ascending, onClick }) => (
  <button onClick={onClick} className="btn-secondary whitespace-nowrap">
    <Icon name="sort" className="w-4 h-4 mr-2" />
    {ascending ? 'A → Z' : 'Z → A'}
  </button>
);

export default SortButton;
