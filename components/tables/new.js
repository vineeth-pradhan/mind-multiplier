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
      <div class="get-new-table-input">
        <div>
          <label> What table would you like to see? </label>
          <span>
            <input type="text" />
          </span>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </Layout>
  );
}
