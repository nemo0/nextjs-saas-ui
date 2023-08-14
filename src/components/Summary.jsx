"use client";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const Summary = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: "1.5rem",
        borderRadius: "0.375rem",
        backgroundColor: "white",
        padding: "1.5rem",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{ marginBottom: "1rem", fontSize: "1.5rem", fontWeight: "600" }}
      >
        Summary
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        <div
          style={{
            borderRadius: "0.375rem",
            backgroundColor: "#F3F4F6",
            padding: "1rem",
          }}
        >
          <h3
            style={{
              marginBottom: "0.5rem",
              fontSize: "1.25rem",
              fontWeight: "600",
            }}
          >
            Total Users
          </h3>
          <div style={{ fontSize: "2.25rem", fontWeight: "700" }}>10</div>
        </div>
        <div
          style={{
            borderRadius: "0.375rem",
            backgroundColor: "#F3F4F6",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <h3
              style={{
                marginBottom: "0.5rem",
                fontSize: "1.25rem",
                fontWeight: "600",
              }}
            >
              New Users (Q3 23)
            </h3>
          </div>

          <div style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            8
            <span
              style={{
                color: "green",
                fontFamily: "monospace",
                fontSize: "1.5rem",
              }}
            >
              {" "}
              +300%
            </span>
          </div>
        </div>
        <div
          style={{
            borderRadius: "0.375rem",
            backgroundColor: "#F3F4F6",
            padding: "1rem",
          }}
        >
          <h3
            style={{
              marginBottom: "0.5rem",
              fontSize: "1.25rem",
              fontWeight: "600",
            }}
          >
            Revenue
          </h3>
          <div style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            $12,345
            <span
              style={{
                color: "green",
                fontFamily: "monospace",
                fontSize: "1.5rem",
              }}
            >
              {" "}
              +78%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
