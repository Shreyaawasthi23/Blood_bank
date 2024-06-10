import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3 className="text-secondary">Manage Blood Bank App </h3>
          <hr />
          <p>
            <b>Blood Banking Saves Lives</b>
            <br/>
            Over the years, blood banking has helped save countless lives.
            Today, about 13.6 million units of blood are donated per year. About 36,000 units of blood are needed each day.
             Thanks to advances in medical technology, blood banks can safely store blood donations, 
             and process and screen blood to ensure safety for all.
            <br/>
            <br/>
            <b>What Happens to Blood in a Blood Bank?</b>
            <br/>
            The first step in the blood banking process is collection. Most blood banks, including the American Red Cross, rely on volunteer blood donors. During a typical blood donation, about 1 pint of blood is collected, along with a few small tubes for testing. The tubes and donation are labeled with donor information and sent off for processing and testing.

            Next, the donated blood is taken to the processing center.
             Whole blood is usually centrifuged,
             which separates it into its many components that patients may need: red blood cells,
             platelets and plasma. White blood cells are removed from the blood to minimize the 
              chance of a reaction in the recipient.
          </p>
          <h3 className="text-secondary">Working of Admin Panel</h3>
          <p>
            <b>Their responsibilities include:</b>
            <br/>
            <br/>
            <h6 className="text-dark">Donor List Management:</h6> The admin maintains and updates a comprehensive database of donors, tracking details like contact information, blood type, donation history, and eligibility for future donations. They also manage donor recruitment and retention programs.
            <br/>
            <h6 className="text-dark"> Hospital List Management:</h6> The admin oversees the list of hospitals and healthcare facilities that the blood bank serves. This includes keeping contact details, ensuring compliance with agreements, and coordinating blood supplies based on the hospitals' needs.

            <h6 className="text-dark"> Organization List Management:</h6> The admin maintains records of partner organizations, such as other blood banks, non-profits, and community groups. This involves managing partnerships, scheduling blood drives, and collaborating on awareness campaigns.
              <br/>
            By efficiently managing these lists, the admin ensures a smooth operation of the blood bank,
             facilitating timely and accurate blood distribution and enhancing donor and recipient experiences.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
