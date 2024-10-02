import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import { decreateItemQuantity, increaseItemQuantity } from "./cartSlice";

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.string,
  currentQunatity: PropTypes.number,
};

function UpdateItemQuantity({ pizzaId, currentQunatity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreateItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="dont-medium text-sm">{currentQunatity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
