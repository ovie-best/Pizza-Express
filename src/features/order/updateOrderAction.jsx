import { updateOrder } from "../../services/apiRestaurant";

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  console.log(request);

  return null;
}
