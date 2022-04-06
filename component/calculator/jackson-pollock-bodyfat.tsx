import {
  Radio,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
export const SevenPointBodyFatCalculator = () => {
  const densityMultipliers = {
    female: {
      one: 0.00046971,
      two: 0.00000056,
      three: 0.00012828,
      number: 1.097,
    },
    male: {
      one: 0.00043499,
      two: 0.00000055,
      three: 0.00028826,
      number: 1.112,
    },
  };

  const [form, setFormValues] = useState({
    gender: "female",
    age: "",
    chest: "",
    midaxilar: "",
    tricep: "",
    subscapular: "",
    abdominal: "",
    suprailiac: "",
    thigh: "",
  });

  const [bodyFatPercentage, setBodyFatPercentage] = useState(0);
  const [bodyDensity, setBodyDensity] = useState(0);

  return (
    <div>
      <Formik
        initialValues={form}
        validate={(values) => {
          const errors: Record<string, string> = {};
          if (!values.age) {
            errors.age = "Required";
          }
          if (!values.gender) {
            errors.gender = "Required";
          }
          if (!values.thigh) {
            errors.thigh = "Required";
          }
          if (!values.suprailiac) {
            errors.suprailiac = "Required";
          }
          if (!values.abdominal) {
            errors.abdominal = "Required";
          }
          if (!values.subscapular) {
            errors.subscapular = "Required";
          }
          if (!values.tricep) {
            errors.tricep = "Required";
          }
          if (!values.midaxilar) {
            errors.midaxilar = "Required";
          }
          if (!values.chest) {
            errors.chest = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const { gender, age, ...everythingElse } = values;

          const sumOfSkinfolds = Object.values(everythingElse)
            .map((val) => parseInt(val))
            .reduce((a, b) => a + b, 0);
          const multipliers = densityMultipliers[gender as "male" | "female"];

          const bodyDensity =
            multipliers.number -
            multipliers.one * sumOfSkinfolds +
            multipliers.two * Math.pow(sumOfSkinfolds, 2) -
            multipliers.three * parseInt(age);
          setFormValues(values);
          setBodyDensity(bodyDensity);
          setBodyFatPercentage(495 / bodyDensity - 450);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="form"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormControl className="form-control">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                onChange={handleChange}
                value={values.gender}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              className="form-control"
              label="Age"
              id="age"
              name="age"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
              error={touched.age && Boolean(errors.age)}
              helperText={touched.age && errors.age}
            />
            <TextField
              className="form-control"
              label="Chest Measurement"
              id="chest"
              name="chest"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.chest}
              error={touched.chest && Boolean(errors.chest)}
              helperText={touched.chest && errors.chest}
            />
            <TextField
              className="form-control"
              label="Mixaxilar Measurement"
              id="midaxilar"
              name="midaxilar"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.midaxilar}
              error={touched.midaxilar && Boolean(errors.midaxilar)}
              helperText={touched.midaxilar && errors.midaxilar}
            />
            <TextField
              className="form-control"
              label="Tricep Measurement"
              id="tricep"
              name="tricep"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tricep}
              error={touched.tricep && Boolean(errors.tricep)}
              helperText={touched.tricep && errors.tricep}
            />
            <TextField
              label="Subscapular Measurement"
              className="form-control"
              id="subscapular"
              name="subscapular"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subscapular}
              error={touched.subscapular && Boolean(errors.subscapular)}
              helperText={touched.subscapular && errors.subscapular}
            />
            <TextField
              label="Abdominal Measurement"
              id="abdominal"
              className="form-control"
              name="abdominal"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.abdominal}
              error={touched.abdominal && Boolean(errors.abdominal)}
              helperText={touched.abdominal && errors.abdominal}
            />
            <TextField
              className="form-control"
              label="Suprailiac Measurement"
              id="suprailiac"
              name="suprailiac"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.suprailiac}
              error={touched.suprailiac && Boolean(errors.suprailiac)}
              helperText={touched.suprailiac && errors.suprailiac}
            />
            <TextField
              className="form-control"
              label="Thigh Measurement"
              id="thigh"
              name="thigh"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.thigh}
              error={touched.thigh && Boolean(errors.thigh)}
              helperText={touched.thigh && errors.thigh}
            />

            <Button
              variant="outlined"
              type="submit"
              fullWidth
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
      <p>Your body density is: {bodyDensity}</p>
      <p>Your body fat percentage is: {bodyFatPercentage}</p>
    </div>
  );
};
