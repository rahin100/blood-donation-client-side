/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Container from "../../Container/Container";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import { FaUsers } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import { MdOutlineBloodtype } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminHome = () => {
  const { user } = useContext(AuthContext);

  const secureAxios = useSecureAxios();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await secureAxios.get("/admin-stats");
      return res.data;
    },
  });

  // custom shape
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const barChart = [
    { name: "Users", uv: stats?.totalUsers },
    { name: "Fund", uv: stats?.totalFund },
    { name: "Request", uv: stats?.totalBloodDonationRequest },
  ];

  return (
    <Container>
      <div>
        <div>
          <h1 className="text-xl text-white bg-[#D2042D] text-center p-4 min-w-full">
            Welcome To your dashboard {user?.displayName}
          </h1>
        </div>

        <div>
          <div className="container mx-auto my-8 rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-[#c31432] to-[#240b36] p-6 rounded-lg text-center text-white">
                <div className="bg-white rounded-full p-4 inline-flex items-center justify-center">
                  <FaUsers className="text-red-600 text-5xl"></FaUsers>
                </div>
                <div className="mt-4 text-lg font-semibold">Total Users</div>
                <div className="text-3xl font-bold">{stats?.totalUsers}</div>
              </div>

              <div className="bg-gradient-to-br from-[#20002c] to-[#cbb4d4] p-6 rounded-lg text-center text-white">
                <div className="bg-white rounded-full p-4 inline-flex items-center justify-center">
                  <RiRefund2Fill className="text-red-600 text-5xl" />
                </div>
                <div className="mt-4 text-lg font-semibold">Total Fund</div>
                <div className="text-3xl font-bold">${stats?.totalFund}</div>
              </div>

              <div className="bg-gradient-to-br from-[#8E0E00] to-[#1F1C18] p-6 rounded-lg text-center text-white">
                <div className="bg-white rounded-full p-4 inline-flex items-center justify-center">
                  <MdOutlineBloodtype className="text-red-600 text-5xl" />
                </div>
                <div className="mt-4 text-lg font-semibold">
                  Total Blood Donation Requests
                </div>
                <div className="text-3xl font-bold">
                  {stats?.totalBloodDonationRequest}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-[50px] text-center">
        <BarChart
            width={500}
            height={300}
            data={barChart}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {barChart.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </Container>
  );
};

export default AdminHome;
