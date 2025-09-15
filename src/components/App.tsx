import React, { useState } from "react";
import styles from "./App.module.css";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import type { Movie } from "../../types/movie";
