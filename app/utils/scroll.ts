const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  event.preventDefault(); // Prevent default anchor behavior

  const element = document.getElementById(id); // Find the target element by ID
  if (element) {
    const offset = -80; // Adjust this value to account for the header height or desired spacing
    const yOffset = element.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({ top: yOffset, behavior: "smooth" });
  }
};

export default handleScroll;
