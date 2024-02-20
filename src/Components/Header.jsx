function Header() {
  return (
    <header className="app-header">
      <img
        src="data:image/png;base64,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"
        alt="React logo"
      />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
