import styles from "./style.module.css";

const DynamicPage = ({ params }) => {
  return (
    <div>
      DynamicPage
      <ul>
        {params.id?.map((d) => {
          return <li className={styles.title}>{d}</li>;
        })}
      </ul>
    </div>
  );
};

export default DynamicPage;
