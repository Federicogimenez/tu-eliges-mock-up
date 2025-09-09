export default function ScrollToSection(sectionId:string) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error(`Section with ID '${sectionId}' not found.`);
      }
    }