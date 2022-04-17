import { NextPage } from "next";
import { useState } from "react";
import { TdeeCalculator } from "../component/calculator/tdee-calculator";
import { PageTitle } from "../component/page-title";

import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
const TdeeCalculatorPage: NextPage = () => {
  const [tdee, setTdee] = useState<{
    activityLevel: string;
    data: { value: number; multiplier: number; label: string }[];
  }>({ activityLevel: "", data: [] });

  return (
    <>
      <PageTitle h1="Total Daily Energy Expenditure (TDEE) Calculator" />
      <Container component="section">
        <Typography sx={{ mb: 3 }}>
          Your Total Daily Energy Expenditure (TDEE) is an estimation of how
          many calories you burn per day when exercise is taken into account. It
          is calculated by first figuring out your Basal Metabolic Rate, then
          multiplying that value by an activity multiplier.{" "}
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Since your BMR represents how many calories your body burns when at
          rest, it is necessary to adjust the numbers upwards to account for the
          calories you burn during the day. This is true even for those with a
          sedentary lifestyle. Our TDEE calculator uses the best formulas and
          displays your score in a way that's easy to read and meaningful.
        </Typography>
        <TdeeCalculator onSubmit={(data) => setTdee(data)} />
        {tdee.data.length > 0 && (
          <TableContainer sx={{ mt: 5 }} component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Activity Level</TableCell>
                  <TableCell align="right">TDEE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tdee.data.map((tdee) => (
                  <TableRow
                    key={tdee.label}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {tdee.label}
                    </TableCell>

                    <TableCell align="right">{tdee.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
};

export default TdeeCalculatorPage;