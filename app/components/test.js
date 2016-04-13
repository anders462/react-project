<div classname="col-xs-12">
      <div classname="col-xs-12 col-sm-6">
       <form  onChange={this.handleUpdateText}>
         <div className="form-group">
          <h3>Markdown</h3>
          <textarea className="form-control" style={styles.textarea} placeholder="# H1"
            value={this.markDownText}></textarea>
         </div>
       </form>
     </div>
       <div classname="col-xs-12 col-sm-6" style={styles.textarea}>
         <FormatedText text={this.state.formatedText}/>
       </div>
 </div>
