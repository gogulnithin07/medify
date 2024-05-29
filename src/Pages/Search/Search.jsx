import Faq from "../../Components/Faq/Faq";
import { HomeSearch } from "../../Components/HomeSearch/HomeSearch";
import { MedicalCenter } from "../../Components/MedicalCenter/MedicalCenter";
function Search() {
  return (
    <div>
      <HomeSearch />
      <MedicalCenter />
      <Faq />
    </div>
  );
}
export default Search;
