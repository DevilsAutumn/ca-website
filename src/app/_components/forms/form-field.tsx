import type { ReactNode } from "react";

type ControlProps = {
  id: string;
  required?: boolean;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: (props: ControlProps) => ReactNode;
};

export function FormField({
  id,
  label,
  required,
  error,
  children,
}: FormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-2 block text-sm leading-snug font-extrabold"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-teal-dark">
            *
          </span>
        )}
      </label>
      {children({
        id,
        required,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": errorId,
      })}
      {error && (
        <p id={errorId} className="mt-2 mb-0 text-sm text-ink">
          {error}
        </p>
      )}
    </div>
  );
}
