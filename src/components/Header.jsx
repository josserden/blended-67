import { Title } from './Title';

export const Header = () => {
  return (
    <header className="bg-white py-5 shadow-md">
      <div className="container flex items-center gap-3">
        <Title className="drop-shadow" tag="h1">
          Image finder
        </Title>
      </div>
    </header>
  );
};
