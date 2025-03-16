import { Grid2 } from "@mui/material";
import NewsCard from "../UI/Card";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/news-query";

function News() {
  const { data } = useQuery({ queryKey: ["news"], queryFn: fetchData });
  console.log(data?.articles);

  return (
    <Grid2 container spacing={3}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </Grid2>
  );
}

export default News;
