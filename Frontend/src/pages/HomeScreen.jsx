import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from "../redux/property/propertyAction";
import { Grid, Card, CardContent, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

import BACKENDURL from "../config";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.property.properties);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  return (
    <Container spacing={3}>
      <Grid container>
        {properties.map((property) => (
          <Link
            to={`/property/${property._id}`}
            style={{ textDecoration: "none" }}
          >
            <Grid item xs={12} sm={6} lg={4} key={property._id}>
              <Card style={{ cursor: "pointer" }}>
                <CardContent>
                  <img
                    src={`${BACKENDURL}/${property.images.replace(/\\/g, "/")}`}
                    alt={property.title}
                    style={{ height: "200px", width: "100%" }}
                  />
                  <Typography variant="h5">{property.title}</Typography>
                  <Typography>{property.description}</Typography>
                  <Typography>{`Price: ${property.price}`}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeScreen;
