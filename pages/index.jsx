import { STRAPI_API, STRAPI_UPLOADS } from "../config";

import Nav from "../components/Nav/Nav.component";
import Header from "../components/Header/Header.component";
import RegisterFormContainer from "../components/RegisterForm/RegisterForm.container";
import UnitCardContainer from "../components/UnitCard/UnitCard.container";

export default function Home({header, units, register}) {
  return (
    <div className="App">
      <Nav />
      <Header header={header} />
      <RegisterFormContainer register={register} />
      <UnitCardContainer units={units}/>
    </div>
  )
}

export async function getServerSideProps() {
  const headerRes = await fetch(`${STRAPI_API}/header?populate=*`);
  const header = await headerRes.json();

  const unitsRes = await fetch(`${STRAPI_API}/units?populate=*`);
  const units = await unitsRes.json();

  const registerRes = await fetch(`${STRAPI_API}/register-form?populate=*`);
  const register = await registerRes.json();

  return {
      props: {
          header: header.data,
          units: units.data,
          register: register.data
      }
  }
}


