// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {props.children}
    </div>
  );
}
