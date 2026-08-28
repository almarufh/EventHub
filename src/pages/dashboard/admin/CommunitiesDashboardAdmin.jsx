import CreateListDashboard from "../../../components/dashboard/CreateListDashboard"

function CommunitiesDashboardAdmin() {
const user = [
  {
    tittle: "Go Concurrency Workshop",
    date: 1724086400000,
    location: "Bandung",
    attendee: "48",
    capacity: "100",
    status: "Active"
  },
  {
    tittle: "React & Next.js Masterclass",
    date: 1724691200000,
    location: "Jakarta",
    attendee: "120",
    capacity: "120",
    status: "full"
  },
  {
    tittle: "DevOps & Kubernetes Bootcamp",
    date: 1725296000000,
    location: "Surabaya",
    attendee: "76",
    capacity: "80",
    status: "almost-full"
  },
  {
    tittle: "AI & Machine Learning Seminar",
    date: 1725900800000,
    location: "Yogyakarta",
    attendee: "15",
    capacity: "200",
    status: "registered"
  },
  {
    tittle: "Flutter Mobile Dev Summit",
    date: 1726505600000,
    location: "Bali",
    attendee: "60",
    capacity: "60",
    status: "full"
  },
  {
    tittle: "Cybersecurity Essentials Meetup",
    date: 1727110400000,
    location: "Jakarta",
    attendee: "47",
    capacity: "50",
    status: "almost-full"
  },
  {
    tittle: "Cloud Architecture on AWS",
    date: 1727715200000,
    location: "Bandung",
    attendee: "25",
    capacity: "75",
    status: "Active"
  },
  {
    tittle: "UI/UX Design Systems Workshop",
    date: 1728320000000,
    location: "Malang",
    attendee: "48",
    capacity: "50",
    status: "almost-full"
  },
  {
    tittle: "PostgreSQL Performance Tuning",
    date: 1728924800000,
    location: "Semarang",
    attendee: "8",
    capacity: "40",
    status: "registered"
  },
  {
    tittle: "Rust for Backend Developers",
    date: 1729529600000,
    location: "Online",
    attendee: "110",
    capacity: "250",
    status: "Active"
  }
];

  return (
    <main className="mt-24 flex flex-col w-full gap-12">
      <CreateListDashboard data={user} type={"communities"}/>
    </main>
  )
}

export default CommunitiesDashboardAdmin