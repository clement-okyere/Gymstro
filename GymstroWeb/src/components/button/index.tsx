import React from "react";

interface IProps {
  loading: boolean;
  className?: string;
}

export const Button: React.FC<IProps> = ({ loading = false, className }) => {
  return (
    <button className={className} type="submit">
      {loading && <i className="fa fa-spinner fa-spin"></i>}
      Submit
    </button>
  );
};
