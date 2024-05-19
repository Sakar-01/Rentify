import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProperty } from '../../redux/property/propertyAction';
import { useParams, Link } from 'react-router-dom';
import { Grid, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import BACKENDURL from '../../config';

const Image = styled('img')({
  height: 'auto',
  maxWidth: '100%',
});

const SingleProperty = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProperty(id));
  }, [dispatch, id]);

  const { singleProperty } = useSelector((state) => state.property);

  if (!singleProperty) {
    return <div>Property not found</div>;
  }

  return (
    <Container style={{marginTop:'30px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {singleProperty.images && (
            <Image src={`${BACKENDURL}/${singleProperty.images.replace(/\\/g, '/')}`} alt={singleProperty.title} />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">{singleProperty.title}</Typography>
          <Typography>{singleProperty.description}</Typography>
          <Typography>{`Price: ${singleProperty.price}`}</Typography>
          <Typography>{`Place: ${singleProperty.place}`}</Typography>
          <Typography>{`Area: ${singleProperty.area}`}</Typography>
          <Typography>{`Bedrooms: ${singleProperty.bedrooms}`}</Typography>
          <Typography>{`Bathrooms: ${singleProperty.bathrooms}`}</Typography>
          <Typography>{`Amenities: ${singleProperty.amenities}`}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleProperty;
