import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarClientes } from "../data/clientes";

export async function action({ params }) {
  await eliminarClientes(params.clientId);
  return redirect("/");
}

const Cliente = ({ cliente }) => {
  const navigate = useNavigate();

  const { nombre, empresa, email, telefono, id } = cliente;

  return (
    <tr className="border-b hover:bg-gray-100 transition-colors">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Teléfono: </span>
          {telefono}
        </p>
      </td>
      <td className="p-6 flex gap-3 justify-center">
        <button
          className="p-2 bg-yellow-500 hover:bg-yellow-600 rounded-md text-white uppercase text-sm transition-colors"
          type="button"
          onClick={() => navigate(`/clients/${id}/edit`)}
        >
          Editar
        </button>
        <Form
          method="POST"
          action={`/clients/${id}/delete`}
          onSubmit={(e) => {
            if (!confirm("Estas seguro de eliminar este registro?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            className="p-2 bg-red-500 hover:bg-red-600 rounded-md text-white uppercase text-sm transition-colors"
            type="submit"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Cliente;
