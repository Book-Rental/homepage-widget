import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown,
  Rb_Button,
  Rb_Radio,
} from "@rentbook/rentbook-ui-lib";
import { Book } from "../../types/category";
import { AddToCartPayload } from "../../types/cart";

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
  onProceed: (payload: AddToCartPayload) => Promise<void>;
}

const AddToCartModal = ({
  isOpen,
  onClose,
  book,
  onProceed,
}: AddToCartModalProps) => {
  const [selectedDuration, setSelectedDuration] = useState("");
  const [actionType, setActionType] = useState<"rent" | "purchase" | "">("");
  const isProceedDisabled =
    actionType === "" ? true : actionType === "rent" ? !selectedDuration : false;

  const rentalOptions = [
    {
      label: `1 Day - ₹${Number(book.rentalPrice)}`,
      value: "day",
    },
    {
      label: `1 Week - ₹${book.rentalPricePerWeek}`,
      value: "week",
    },
    {
      label: `1 Month - ₹${book.rentalPricePerMonth}`,
      value: "month",
    },
  ];

  const handleClose = () => {
    setActionType("");
    setSelectedDuration("");
    onClose();
  };

  const handleProceed = async () => {
    if (!actionType || !selectedDuration) return;
    setActionType("");
    setSelectedDuration("");
    onClose();
    await onProceed({
      bookId: book.id,
      quantity: 1,
      pricingMode: "rent",
      rentalPeriod: selectedDuration as "day" | "week" | "month",
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalHeader onClose={handleClose}>
        Choose Purchase Option
      </ModalHeader>

      <ModalBody>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Rb_Radio
              name="purchaseOption"
              label="Rent Now"
              value="rent"
              checked={actionType === "rent"}
              onChange={() => setActionType("rent")}
            />

            {actionType === "rent" && (
              <div className="mt-3 ml-7">
                <Dropdown
                  placeholder="Select Rental Duration"
                  options={rentalOptions}
                  value={selectedDuration}
                  onChange={setSelectedDuration}
                />
              </div>
            )}
          </div>
        </div>
      </ModalBody>

      <ModalFooter>
        <div className="flex justify-end">
          <Rb_Button
            disabled={isProceedDisabled}
            onClick={handleProceed}
          >
            Proceed
          </Rb_Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default AddToCartModal;

