const IdamApiUrl = (origin: string): string => {
  switch (origin) {
    // Production
    case "https://idam.link":
      return "https://api.idam.link";
    default:
      // Local development
      return "http://localhost:8000";
  }
};

export default IdamApiUrl;
