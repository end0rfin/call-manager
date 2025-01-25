import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Header from "./Header";
import {
  filterDate,
  filterLabels,
  mockData,
  tableHeaderLabels,
} from "../constants";
import { CallData, FilterState } from "../types";
import { DatePicker } from "@mui/x-date-pickers";

export default function Dashboard() {
  const [filteredData, setFilteredData] = useState<CallData[]>(mockData);
  const [filters, setFilters] = useState<FilterState>({
    managerName: "",
    dateFrom: null,
    dateTo: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userLogin = Cookies.get("userLogin");
    if (!userLogin) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    let updatedfilteredData = [...mockData];

    if (filters.managerName) {
      updatedfilteredData = updatedfilteredData.filter((item) =>
        item.managerName
          .toLowerCase()
          .includes(filters.managerName.toLowerCase())
      );
    }

    if (filters.dateFrom) {
      updatedfilteredData = filterDate(updatedfilteredData)(
        filters.dateFrom.toLocaleDateString()
      )("ASC");
    }

    if (filters.dateTo) {
      updatedfilteredData = filterDate(updatedfilteredData)(
        filters.dateTo.toLocaleDateString()
      )("DESC");
    }

    setFilteredData(updatedfilteredData);
  }, [filters]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <TextField
              name="manager"
              label={filterLabels.managerName}
              value={filters.managerName}
              sx={{ flexGrow: 1 }}
              onChange={(e) =>
                setFilters({ ...filters, managerName: e.target.value })
              }
            />
            <DatePicker
              name="dateFrom"
              value={filters.dateFrom}
              label={filterLabels.dateFrom}
              sx={{ width: 200 }}
              onChange={(date) => setFilters({ ...filters, dateFrom: date })}
            />
            <DatePicker
              name="dateTo"
              value={filters.dateTo}
              label={filterLabels.dateTo}
              sx={{ width: 200 }}
              onChange={(date) => setFilters({ ...filters, dateTo: date })}
            />
          </Box>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  {tableHeaderLabels.map((label) => (
                    <TableCell key={label} align="center">
                      {label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.managerName}</TableCell>
                    <TableCell align="center">{row.callCount}</TableCell>
                    <TableCell align="center">{row.missedCalls}</TableCell>
                    <TableCell align="center">{row.averageDuration}</TableCell>
                    <TableCell>{row.callDate}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Box>
  );
}
