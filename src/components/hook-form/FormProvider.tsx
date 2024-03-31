import { FormProvider as Form } from "react-hook-form";

type props = {
  methods: any;
  children: React.ReactNode;
  onSubmit?: VoidFunction;
};

export default function FormProvider({ methods, onSubmit, children }: props) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
