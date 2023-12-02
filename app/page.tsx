import Property from "@/components/Property";
import { getListings } from "../utils/actions";
import { IListing } from "@/models/listing";

export default async function Home() {
  const listings = await getListings();

  console.log(listings);

  return (
    <main>
      <div className="grid grid-cols-4 gap-5">
        {listings.map((listing: IListing) => (
          <Property key={listing._id} listing={listing} />
        ))}
      </div>
    </main>
  );
}
