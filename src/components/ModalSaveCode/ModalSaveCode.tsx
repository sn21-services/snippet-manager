"use client";
import {
  Input,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Button,
  Textarea,
} from "@headlessui/react";

type ModalSaveCodeProps = {
  open: boolean;
  onCloseModal: () => void;
};

const ModalSaveCode = ({ open, onCloseModal }: ModalSaveCodeProps) => {
  return (
    <Dialog open={open} onClose={onCloseModal} className="relative z-50">
      <section className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[#00000070]">
        <DialogPanel className="max-w-xl w-full space-y-4 border border-[#2b2b2b] bg-[#202020] p-5 rounded-lg">
          <DialogTitle className="text-lg underline">
            Save code for you
          </DialogTitle>

          <Field>
            <Label className="text-xs font-medium text-white">
              Name project
            </Label>
            <Input className="mt-1 block w-full rounded-lg border-none bg-white/5 px-2 py-1.5 text-sm/6 text-white" />
          </Field>

          <Field>
            <Label className="text-xs font-medium text-white">
              Description
            </Label>
            <Textarea className="mt-1 block w-full rounded-lg border-none bg-white/5 px-2 py-1.5 text-sm/6 text-white" />
          </Field>

          <div className="flex gap-4 justify-end mt-5">
            <Button
              className="rounded px-3 py-1.5 text-sm text-white cursor-pointer"
              onClick={onCloseModal}
            >
              Cancel
            </Button>
            <Button className="rounded bg-amber-600 px-3 py-1.5 text-sm text-white data-hover:bg-amber-700 cursor-pointer">
              Confirm
            </Button>
          </div>
        </DialogPanel>
      </section>
    </Dialog>
  );
};

export default ModalSaveCode;
