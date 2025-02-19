import { Field, Formik, Form } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik initialValues={[]} onSubmit={() => {}}>
      <Form className={css.contactForm}>
        <label className={css.formLabel} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.formField}
          type="text"
          name="fullName"
          id={nameId}
        ></Field>

        <label className={css.formLabel} htmlFor={numberId}>
          Number
        </label>
        <Field
          className={css.formField}
          type="tel"
          name="phoneNumber"
          id={numberId}
        ></Field>

        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
