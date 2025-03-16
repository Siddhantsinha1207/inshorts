import React from "react";
import {
  CurrencyBitcoin,
  Gavel,
  FlagCircle,
  SportsCricket,
  Computer,
  RocketLaunch,
  Movie,
  TravelExplore,
  TwoWheeler,
  Science,
  Flight,
  BusinessCenter,
} from "@mui/icons-material";

export const tabListData = [
  { category: "india", label: "India", icon: React.createElement(FlagCircle) },
  {
    category: "business",
    label: "Business",
    icon: React.createElement(CurrencyBitcoin),
  },
  { category: "politics", label: "Politics", icon: React.createElement(Gavel) },
  {
    category: "sports",
    label: "Sports",
    icon: React.createElement(SportsCricket),
  },
  {
    category: "technology",
    label: "Technology",
    icon: React.createElement(Computer),
  },
  {
    category: "startups",
    label: "Startups",
    icon: React.createElement(RocketLaunch),
  },
  {
    category: "entertainment",
    label: "Entertainment",
    icon: React.createElement(Movie),
  },
  {
    category: "international",
    label: "International",
    icon: React.createElement(TravelExplore),
  },
  {
    category: "automobile",
    label: "Automobile",
    icon: React.createElement(TwoWheeler),
  },
  { category: "science", label: "Science", icon: React.createElement(Science) },
  { category: "travel", label: "Travel", icon: React.createElement(Flight) },
];
