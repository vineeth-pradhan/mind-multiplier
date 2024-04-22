import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function NewTable(){
  return(
    <Layout>
      <Head>
        <title>
          Mind Multiplier
        </title>
      </Head>
      <div className="get-new-table-input">
        <div>
          <label> What table would you like to see? </label>
        </div>
        <div className="mt-3">
          <span>
            <input type="text" name="which-table" className="border border-black rounded-full" />
          </span>
          <span>
            <button className="ml-3 px-2 py-2 font-semibold rounded-full border border-sky-700 text-sm bg-sky-500 hover:bg-sky-700">
              Submit
            </button>
          </span>
        </div>
      </div>
    </Layout>
  );
}
