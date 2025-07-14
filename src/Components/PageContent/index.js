import AppRoutes from "../Routes";

function PageContent(props) {
  return (
    <div className="pageContent">
      <AppRoutes {...props} />
    </div>
  );
}

export default PageContent;
