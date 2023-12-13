function Greetings({ lang, children }) {
  const getGreeting = () => {
    switch (lang) {
      case 'de':
        return `Hallo ${children}!`;
      case 'en':
        return `Hello ${children}!`;
      case 'es':
        return `Hola ${children}!`;
      case 'fr':
        return `Bonjour ${children}!`;
      default:
        return `Hello ${children}!`;
    }
  };
  return <div>{getGreeting()}</div>;
}

export default Greetings;
