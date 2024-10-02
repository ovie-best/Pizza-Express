import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import PropTypes from "prop-types";

UpdateOrder.propTypes = {
  order: PropTypes.object,
};

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  console.log(order);
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>;
    </fetcher.Form>
  );
}

export default UpdateOrder;
