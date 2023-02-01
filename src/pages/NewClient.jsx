import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarClientes } from "../data/clientes";

export async function action({ request }) {
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  const formData = await request.formData(),
    datos = Object.fromEntries(formData),
    errores = [],
    email = formData.get("email");

  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  if (!regex.test(email)) {
    errores.push("El correo electrónico no es valido");
  }

  if (Object.keys(errores).length) {
    return errores;
  }

  await agregarClientes(datos);

  return redirect("/");
}

const NewClient = () => {
  const navigate = useNavigate(),
    errores = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-emerald-800">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-emerald-800 hover:bg-emerald-700 transition-colors rounded-md cursor-pointer text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow-md rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20 border-emerald-700 border-2">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post" noValidate>
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-emerald-800 hover:bg-emerald-700 transition-colors rounded-md cursor-pointer p-3 uppercase font-bold text-white text-lg"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NewClient;
